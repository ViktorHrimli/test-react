import Image from "next/image";

var url = process.env.URL;

export default async function Home() {
  var res = await fetch(`${url}/api/photo?populate=*`);

  var photo = await res.json();

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Image
        src={`${url}${photo.data.attributes.media.data.attributes.url}`}
        w
        fill
      />
    </div>
  );
}
