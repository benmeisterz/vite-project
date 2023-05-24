import './pro.css'
import Property from './Property';
export default function PropertyList({ properties }) {
    return (
        <div className="pro">
            {
                properties.map((i) => (
                    <Property
                        key={i.id}
                        {...i}
                    />
                ))
            }
        </div >
    );
}
