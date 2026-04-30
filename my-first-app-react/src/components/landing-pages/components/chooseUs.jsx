export function ChooseUs() {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="row mb-5">
                    <div className="col">
                        <h2 className="fw-bold text-center">Why Choose Us?</h2>
                        <p className="text-center text-muted">
                            Discover the benefits of our book platform
                        </p>
                    </div>
                </div>
                <div className="row g-4">
                    {benefits_data.map((benefit, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body text-center">
                                    <i
                                        className={`bi ${benefit.icon} text-primary mb-3`}
                                        style={{ fontSize: "2.5rem" }}
                                    ></i>
                                    <h5 className="card-title fw-bold">{benefit.title}</h5>
                                    <p className="card-text text-muted">{benefit.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const benefits_data = [
    {
        icon: "bi-book",
        title: "Vast Library",
        description: "Access thousands of books across all genres and categories.",
    },
    {
        icon: "bi-people",
        title: "Community Reviews",
        description: "Read honest reviews from fellow book lovers before you buy.",
    },
    {
        icon: "bi-shield-check",
        title: "Secure Shopping",
        description: "Enjoy a safe and seamless checkout experience every time.",
    },
];  