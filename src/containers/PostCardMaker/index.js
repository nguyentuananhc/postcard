import React from 'react'
import { Stage, Layer, Text, Transformer } from 'react-konva'

const TEXT_DEFAULT = {
    key: 'my-text',
    x: 20,
    y: 60,
    text:
        "COMPLEX TEXT\n\nAll the world's a stage, and all the men and women merely players. They have their exits and their entrances.",
    fontSize: 16,
    fontFamily: 'Calibri',
    fill: '#555',
    width: 300,
    padding: 20,
    align: 'center',
}

const PostCardMaker = () => {
    const [selectedId, selectShape] = React.useState(null)
    const [textProps, setTextProps] = React.useState(TEXT_DEFAULT)

    const TextWrapper = (props) => {
        const { isSelected, onSelect, onChange, ...rest } = props
        const shapeRef = React.useRef()
        const trRef = React.useRef()

        React.useEffect(() => {
            if (isSelected) {
                trRef.current.nodes([shapeRef.current])
                trRef.current.getLayer().batchDraw()
            }
        }, [isSelected])

        return (
            <>
                <Text
                    onClick={onSelect}
                    ref={shapeRef}
                    {...rest}
                    onDragEnd={(e) => {
                        console.log(e, 'dragend')
                        onChange({
                            ...rest,
                            x: e.target.x(),
                            y: e.target.y(),
                        })
                    }}
                    onTransformEnd={(e) => {
                        // transformer is changing scale of the node
                        // and NOT its width or height
                        // but in the store we have only width and height
                        // to match the data better we will reset scale on transform end
                        const node = shapeRef.current

                        const scaleX = node.scaleX()
                        const scaleY = node.scaleY()
                        const rotation = node.rotation()

                        console.log(node)

                        // we will reset it back
                        node.scaleX(1)
                        node.scaleY(1)

                        onChange({
                            ...rest,
                            x: node.x(),
                            y: node.y(),
                            // set minimal value
                            width: Math.max(node.width() * scaleX),
                            height: Math.max(node.height() * scaleY),
                            // scaleX: 1,
                            rotation,
                        })
                    }}
                />
                {isSelected && (
                    <Transformer
                        ref={trRef}
                        // enabledAnchors={['middle-left', 'middle-right']}
                        boundBoxFunc={(oldBox, newBox) => {
                            newBox.width = Math.max(30, newBox.width)
                            return newBox
                        }}
                        rotationSnaps={[0, 90, 180, 270]}
                    />
                )}
            </>
        )
    }

    const checkDeselect = (e) => {
        // deselect when clicked on empty area
        const clickedOnEmpty = e.target === e.target.getStage()
        if (clickedOnEmpty) {
            selectShape(null)
        }
    }

    return (
        <Stage
            width={window.innerWidth}
            height={window.innerHeight}
            onMouseDown={checkDeselect}
            onTouchStart={checkDeselect}
        >
            <Layer>
                <TextWrapper
                    {...textProps}
                    draggable
                    isSelected={selectedId === 'my-text'}
                    onSelect={() => {
                        selectShape('my-text')
                    }}
                    onChange={(newAttrs) => {
                        setTextProps(newAttrs)
                    }}
                />
            </Layer>
        </Stage>
    )
}

export default PostCardMaker
