
import '../styles/txtimg.css';
// Txtimg.jsx
function Txtimg(props) {
  const { img, txt, txt2 } = props;
  return (
    <div className="txtimg-container">
      {img}
      {txt}
      {txt2}
    </div>
  );
}

export function Txt(props) {
  const { texto, titulo } = props;
  return (
    <div className="txt-body">
      <p className="txt-titulo">{titulo}</p>
      <p className="txt-texto">{texto}</p>
    </div>
  );
}

export function Image(props) {
  const { url, alt } = props;
  return (
    <img src={url} alt={alt} className="txt-image" />
  );
}

export default Txtimg;
