import Image from "next/image";

export default function CollageImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}) {

  console.log(photo);

  return (
    <div style={{ ... wrapperStyle, position: 'relative' }}>
      <Image 
        layout="fill"
        src={photo.src}
        placeholder={'blurDataURL' in photo ? 'blur' : undefined}
        { ... { alt, title, sizes, className, onClick }}
      />
    </div>
  )
}