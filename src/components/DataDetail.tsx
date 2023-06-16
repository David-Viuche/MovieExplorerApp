
export default function DataDetail({ label, text }: { label: string, text: string }) {
  return (
    <>
      <span className='font-bold'>
        {label}
      </span>
      <h2>
        {text}
      </h2>
    </>
  )
}