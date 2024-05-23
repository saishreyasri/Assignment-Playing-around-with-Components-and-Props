import lake from "../image/lake.JPG";

const imageData = [
  { id: 1, img: lake },
  { id: 2, img: lake },
  { id: 3, img: lake },
  { id: 4, img: lake }
];

export default function Body() {
  return (
    <div>
      {
       imageData.map((element) => (
        <div key={element.id} className="column">
          <img src={element.img} alt={`Lake ${element.id}`} />
        </div>
      ))}
    </div>
  );
}
