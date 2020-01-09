const Voucher = ({ slug, id}) =>{
  console.log(slug, id)
  return (
    <>
      <h1>voucher page</h1>
      <div>slug {slug}</div>
      <div>id { id }</div>
    </>
  )
}

Voucher.getInitialProps = ({ query }) => query;

export default Voucher;