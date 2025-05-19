
interface Message {
    message:string,
    bgColor:string
}

export const Message = ({message, bgColor}:Message) => {
    const style: React.CSSProperties = {
        padding: '1rem',
        marginBottom: '1rem',
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        backgroundColor: bgColor
    }
    return (
        <div style={style}>{message}</div>
    )
}
