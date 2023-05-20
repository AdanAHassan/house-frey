import Title from "./Text/Title.js"

const Text = ({content}) => {
    return (
        <div className="">
        {Object.values(content).map(item => (
            <Title key={item.id} titleContent={item}/>
        ))}
        </div>
    )
}

export default Text
