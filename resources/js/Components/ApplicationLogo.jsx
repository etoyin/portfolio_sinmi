export default function ApplicationLogo({className = '', ...props }) {
    return (
        <div 
            {...props}
            className={className}
        >
            <img src="/img/sinmi_logo2.png" className="h-full" alt="" />
        </div>
    );
}
