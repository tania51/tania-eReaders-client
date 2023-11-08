

const Title = ({ children }) => {
    return (
        <div>
            <div className="pb-8">
                <h3 className="text-rose-600 font-semibold text-3xl uppercase">{children}</h3>
            </div>
        </div>
    );
};

export default Title;