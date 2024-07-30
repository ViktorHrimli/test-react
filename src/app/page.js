export default async function Home() {
  var res = await fetch(`${process.env.URL}/api/tests/1?populate=*`);

  var photo = await res.json();

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <h1 style={{ color: "red", fontSize: 40 }}>
        {photo.data.attributes.dddd}
      </h1>
    </div>
  );
}
