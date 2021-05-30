import React from "react";
import {Formik, Form, Field} from "formik";
import s from "./checkbox.module.css"
import {FILTER_STATES} from "../../commons/constants"

// const checkboxData = [
//     {value: "noTransfers", label: "Без пересадок"},
//     {value: "oneTransfer", label: "1 пересадка"},
//     {value: "twoTransfers", label: "2 пересадки"},
//     {value: "threeTransfers", label: "3 пересадки"}
// ];
// const selectAllData = checkboxData.map((checkbox) => checkbox.value);

export default function Test(props) {
    console.log(props,"sidebar")
    return (<ul>
            <li>
                <label>
                    <input type="checkbox" onClick={() => props.setFilterMethod(111)}/>
                    Все
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" onClick={() => props.setFilterMethod(FILTER_STATES.without)}/>
                    Без пересадок
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" onClick={() => props.setFilterMethod(FILTER_STATES.oneTransfer)}/>
                    1 переседка
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" onClick={() => props.setFilterMethod(FILTER_STATES.twoTransfers)}/>
                    2 переседка
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" onClick={() => props.setFilterMethod(FILTER_STATES.threeTransfers)}/>
                    3 переседка
                </label>
            </li>
        </ul>

    )
}

//     return (
//
//
/*
    <div>
        // // <Formik*/
//                 initialValues={{ numbers: [], selectAll: false }}
//             >
//                 {({ values, setFieldValue }) => (
//                     <Form>
//                         <div className={s.test}>
//                             <label>
//                                 <Field
//                                     onChange={() => {
//                                         if (!values.selectAll) {
//                                             setFieldValue("numbers", selectAllData);
//                                         } else {
//                                             setFieldValue("numbers", []);
//                                         }
//                                         setFieldValue("selectAll", !values.selectAll);
//                                     }}
//                                     checked={values.selectAll}
//                                     type="checkbox"
//                                     name="selectAll"
//                                 />{" "}
//                                 Выбрать все
//                             </label>
//                         </div>
//                         <div>
//                             {checkboxData.map((checkbox) => (
//                                 <div className={s.test} key={checkbox.value}>
//                                     <label>
//                                         <Field
//                                             type="checkbox"
//                                             name="numbers"
//                                             value={checkbox.value}
//                                         />{" "}
//                                         {checkbox.label}
//                                     </label>
//                                 </div>
//                             ))}
//                         </div>
//                         <div>
//                             <Field name="firstName"
//                                    type="checkbox">
//                                 {( props ) => (
//
//                                     <CheckboxField {...props} />
//                                 )}
//                             </Field>
//                         </div>
//                         <div>
//                             <Field name="secondName"
//                                    type="checkbox">
//                                 {( props ) => (
//
//                                     <CheckboxField {...props} />
//                                 )}
//                             </Field>
//                         </div>
//                         <div>
//                             <Field name="nextName"
//                                    type="checkbox">
//                                 {( props ) => (
//
//                                     <CheckboxField {...props} />
//                                 )}
//                             </Field>
//                         </div>
// {
//                         <pre>{JSON.stringify(values, null, 2)}</pre>
// }
//                     </Form>
//                 )}
//
//             </Formik>
//         </div>
//     );
// }

/*
        const CheckboxField=(props) => {
        console.log(props)
        return (
        <div onClick={props.field.onChange}>
        <div className={s.checkBox}>sddsd{props.field.checked.toString()}</div>
        <input type="checkbox" {...props.field}/>
        <div className={s.numberOftransfers}></div>
    </div>
)
}*/
