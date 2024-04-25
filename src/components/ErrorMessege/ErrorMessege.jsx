export default function ErrorMessage({ error }) {
  return <div>{error && <p >Oops! There was an error! Please reload!</p>}</div>;
}