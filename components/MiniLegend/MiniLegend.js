const COLOR_ARRAY = ["#24C53E", "#DE2B41", "#A81AFF", "#FFA41C"];

const MiniLegend = ({list}) => {
    if (list) {
        return <div>
            <label>Popular products</label>
            <div>
                {list.map((word, index) => {
                    return <div><span style={{color:COLOR_ARRAY[index]}}>●</span> {word}</div>
                })}
            </div>
        </div>
    } else {
        return <span />
    }
}

export default MiniLegend;