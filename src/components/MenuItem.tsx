const MenuItem = ({ key, title }: { key: string; title: "string" }) => {
    return <div key={key}>--{title}</div>;
};

export default MenuItem;
