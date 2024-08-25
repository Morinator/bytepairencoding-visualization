import RowComponent from "./components/RowComponent";
import calculateBPEStep from "./utils"

const BPEVisualization: React.FC = () => {
    const originalText = [1, 4, 7, 5, 1, 4, 7];

    const others = [originalText];
    while (others[others.length - 1].length > 1) { // last element should have only 1 token
        others.push(calculateBPEStep(others[others.length - 1]));
    }

    return (
        <div>
            <h2>BPE Visualization:</h2>
            {others.map((list, index) => (
                <div key={index}>
                    <h3>{index === 0 ? "Original Text:" : `Step ${index}:`}</h3>
                    <RowComponent characters={list} />
                </div>
            ))}
        </div>
    );
};

export default BPEVisualization;