import React from 'react'
import { Stage, Layer, Image } from 'react-konva'
import ImageWrapper from 'components/Image'
import TextWrapper from 'components/Text'

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

const App = () => {
    const stageRef = React.useRef()
    const [images, setImages] = React.useState([])
    const [selectedId, selectShape] = React.useState(null)
    const [listText, setText] = React.useState([])

    const checkDeselect = (e) => {
        // deselect when clicked on empty area
        const clickedOnEmpty = e.target === e.target.getStage()
        if (clickedOnEmpty) {
            selectShape(null)
        }
    }

    return (
        <div>
            <div className="d-flex align-items-center">
                <img
                    alt="lion"
                    src="https://konvajs.org/assets/lion.png"
                    onClick={(e) => {
                        if (images.length > 2) return
                        setImages(
                            images.concat([
                                {
                                    x: 50,
                                    y: 60,
                                    src: 'https://konvajs.org/assets/lion.png',
                                },
                            ])
                        )
                    }}
                />
                <div
                    onClick={(e) => {
                        setText(listText.concat([TEXT_DEFAULT]))
                    }}
                >
                    LỜI CHÚC
                </div>
            </div>

            <div>
                <Stage
                    width={window.innerWidth}
                    height={window.innerHeight}
                    style={{ border: '1px solid grey' }}
                    onMouseDown={checkDeselect}
                    onTouchStart={checkDeselect}
                    ref={stageRef}
                >
                    <Layer>
                        {listText.map((text, index) => (
                            <TextWrapper
                                {...text}
                                key={`my-text-${index}`}
                                draggable
                                isSelected={selectedId === `my-text-${index}`}
                                onSelect={() => {
                                    selectShape(`my-text-${index}`)
                                }}
                                onChange={(newAttrs) => {
                                    const rects = [...listText]
                                    rects[index] = {
                                        ...newAttrs,
                                    }

                                    setText(rects)
                                }}
                            />
                        ))}
                        {images.map((image, index) => {
                            return (
                                <ImageWrapper
                                    draggable
                                    isSelected={selectedId === index}
                                    onSelect={() => {
                                        selectShape(index)
                                    }}
                                    onChange={(newAttrs) => {
                                        const rects = [...images]
                                        rects[index] = {
                                            ...newAttrs,
                                        }

                                        setImages(rects)
                                    }}
                                    key={index}
                                    image={image}
                                />
                            )
                        })}
                    </Layer>
                </Stage>
            </div>
        </div>
    )
}

export default App
