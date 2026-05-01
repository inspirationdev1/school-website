const Features = () => {
  const data = [
    { title: "Student Management", desc: "Manage student records easily." },
    { title: "Fee Management", desc: "Track fee payments and dues." },
    { title: "Examination System", desc: "Conduct exams and publish results." },
    { title: "Staff Management", desc: "Manage staff and salaries." },
    { title: "Finance Module", desc: "Track expenses and income." },
    { title: "Dashboard", desc: "Analytics of school performance." }
  ];

  return (
    <section className="container" id="features">
      <h2 style={{ textAlign: "center" }}>Our Features</h2>

      <div className="features">
        {data.map((item, i) => (
          <div className="card" key={i}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
