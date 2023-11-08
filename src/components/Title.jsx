

const Title = ({ children }) => {
    return (
        <div>
            <div>
                <h3 className="text-red-800 font-bold text-3xl">{children}</h3>
            </div>
        </div>
    );
};

export default Title;