import '../resources/scss/Button.scss';

export function Button({ children, type, className }) {
    return (
        <button type={type} className={className}>
            {children}
        </button>
    );
}
