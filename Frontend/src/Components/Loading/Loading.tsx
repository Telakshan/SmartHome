import "./Loading.css";

const Loading: React.FC = () => {
  return (
    <div className="lds-ring as-overlay">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;