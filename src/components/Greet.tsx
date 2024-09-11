import React from "react";

const Greet = ({name}: {name: string | null}) => {
    if (name) return <h1 className="text-lg mt-4">Welcome back, {name}!</h1>

    return <h1 className="text-lg mt-4">Welcome, Guest!</h1>
}

export default Greet;