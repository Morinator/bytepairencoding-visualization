import RowComponent from "./components/RowComponent";
import calculateBPEStep from "./utils";

const BPEVisualization: React.FC = () => {
  const originalText = [1, 4, 7, 5, 1, 4, 7];

  const others = [originalText];
  while (others[others.length - 1].length > 1) {
    // last element should have only 1 token
    others.push(calculateBPEStep(others[others.length - 1]));
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h2>BPE Visualization:</h2>
      {others.map((list, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "80px",
              marginRight: "20px",
              textAlign: "right",
              fontWeight: "bold",
            }}
          >
            {index === 0 ? "Original:" : `Step ${index}:`}
          </div>
          <RowComponent characters={list} />
        </div>
      ))}
    </div>
  );
};

export default BPEVisualization;
