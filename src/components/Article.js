import React from "react";

function Article() {
  return <div>
   <h1>please pass this test</h1> </div>;
}

export default Article;

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  screen.debug();

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
