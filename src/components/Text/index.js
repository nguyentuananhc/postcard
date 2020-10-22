import { Text, Transformer } from 'react-konva'

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
                onTap={onSelect}
                ref={shapeRef}
                {...rest}
                onDragEnd={(e) => {
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
                    boundBoxFunc={(oldBox, newBox) => {
                        newBox.width = Math.max(30, newBox.width)
                        return newBox
                    }}
                    resizeEnabled={false}
                />
            )}
        </>
    )
}

export default TextWrapper
