const data = ['A', 'B', 'C'];

const List = ({ data, render, slot }) => {
  return <div>
    {
      data.map(render)
    }
    <div>
      {slot && slot}
    </div>
  </div>
}

const Item = (item) => <div> - {item}</div>

export default function RenderProps() {
  return (
    <div>
      <List
        data={data}
        render={Item}
        slot={<div>slot</div>}
      />
      <List
        data={data}
        render={(item) => <div> + {item}</div>}
      />
    </div>
  )
}
