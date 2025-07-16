export default function ImageBlock({url, alt, width, height}) {
    return (
        <img className={`p-5 wx-3 py-3 w-${width} h-${height}`} src={url} alt={alt}></img>
    )
}