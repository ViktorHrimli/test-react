import Image from "next/image";

var url = process.env.URL;

export default async function Home() {
  var path = url ? url : "https://test-cloud-run-5ns7nwldjq-uc.a.run.app";
  var res = await fetch(`${path}/api/photo?populate=*`);

  var photo = await res.json();

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Image
        src={`${path}${photo.data.attributes.media.data.attributes.url}`}
        w
        fill
      />
    </div>
  );
}
