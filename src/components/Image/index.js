import React from 'react'
import { Text, Transformer, Image } from 'react-konva'
import useImage from 'use-image'

const ImageWrapper = (props) => {
    const { isSelected, onSelect, onChange, image, ...rest } = props
    const shapeRef = React.useRef()
    const trRef = React.useRef()
    const [img] = useImage(image.src)

    React.useEffect(() => {
        if (isSelected) {
            trRef.current.nodes([shapeRef.current])
            trRef.current.getLayer().batchDraw()
        }
    }, [isSelected])

    return (
        <>
            <Image
                onClick={onSelect}
                image={img}
                // I will use offset to set origin to the center of the image
                offsetX={img ? img.width / 2 : 0}
                offsetY={img ? img.height / 2 : 0}
                width={image?.width || img?.width || 0}
                height={image?.height || img?.height || 0}
                offsetX={0}
                offsetY={0}
                ref={shapeRef}
                // onClick={onSelect}
                {...rest}
                onDragEnd={(e) => {
                    onChange({
                        ...rest,
                        ...image,
                        src: image.src,
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
                        src: image.src,
                        x: node.x(),
                        y: node.y(),
                        // set minimal value
                        width: Math.max(node.width() * scaleX),
                        height: Math.max(node.height() * scaleY),
                        scaleX: 1,
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
                />
            )}
        </>
    )
}

export default ImageWrapper
