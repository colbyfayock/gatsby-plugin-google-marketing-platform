import React from 'react';
import { Link } from 'gatsby';

const Page2 = () => {
  return (
    <>
      <h1>Page 2</h1>
      <p>
        Back to <Link to="/">Home</Link>.
      </p>
    </>
  )
}

export default Page2;