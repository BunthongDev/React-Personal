import ComponentC from "./ComponentC"

export default function ComponentB() {
  return (
    <div className="Box border-solid border-2 border-black p-4 m-4">
      <h1>Component B</h1>
      <ComponentC/>
    </div>
  )
}
