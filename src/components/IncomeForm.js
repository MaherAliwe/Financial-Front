
import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import "./exp.css"

function IncomeForm({ income, setIncome }) {
  const desc = useRef(null);
  const date = useRef(null);
  const price = useRef(null);
  const category = useRef(null);

  const AddIncome = (e) => {
    e.preventDefault();

    let d = date.current.value.split("-");
    let newD = new Date(d[0], d[1] - 1, d[2]);

    setIncome([
      ...income,
      {
        desc: desc.current.value,
        price: price.current.value,
        category: category.current.value,
        date: newD.getTime(),
      },
    ]);

    desc.current.value = "";
    price.current.value = null;
    date.current.value = null;
    category.current.value = null;
  };

  return (
    <Form className="income-form" onSubmit={AddIncome}>
      <div className="form-inner">

        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="Income Description..."
          ref={desc}
        />

        <input
          type="number"
          name="price"
          id="price"
          placeholder="Price..."
          ref={price}
        />

        <input
          type="date"
          name="date"
          id="date"
          placeholder="Income date..."
          ref={date}
        />

        <input
          type="number"
          name="category"
          id="category"
          placeholder="category"
          ref={category}
        />
        <input type="submit" value="Add Income" />
      </div>
    </Form>
  );
}

export default IncomeForm;
