import React from "react";
import { Formik, Form, Field } from "formik";
import s from "./checkbox.module.css"

const checkboxData = [
    { value: "noTransfers", label: "Без пересадок" },
    { value: "oneTransfer", label: "1 пересадка" },
    { value: "twoTransfers", label: "2 пересадки" },
    { value: "threeTransfers", label: "3 пересадки" }
];

export default function Test() {
    const selectAllData = checkboxData.map((checkbox) => checkbox.value);

    return (
        <div>
            <Formik
                initialValues={{ numbers: [], selectAll: false }}
                onSubmit={(values) => console.log(values)}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <div className={s.test}>
                            <label>
                                <Field
                                    onChange={() => {
                                        if (!values.selectAll) {
                                            setFieldValue("numbers", selectAllData);
                                        } else {
                                            setFieldValue("numbers", []);
                                        }
                                        setFieldValue("selectAll", !values.selectAll);
                                    }}
                                    checked={values.selectAll}
                                    type="checkbox"
                                    name="selectAll"
                                />{" "}
                                Выбрать все
                            </label>
                        </div>
                        <div>
                            {checkboxData.map((checkbox) => (
                                <div className={s.test} key={checkbox.value}>
                                    <label>
                                        <Field
                                            type="checkbox"
                                            name="numbers"
                                            value={checkbox.value}
                                        />{" "}
                                        {checkbox.label}
                                    </label>
                                </div>
                            ))}
                        </div>
{/*
                        <pre>{JSON.stringify(values, null, 2)}</pre>
*/}
                    </Form>
                )}
            </Formik>
        </div>
    );
}