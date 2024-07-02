import { useField } from "formik";
import CustomError from "./Error";

const CustomInput = ({ label, ...props }) => {

  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <input {...field} {...props} className={meta.touched && meta.error ? "input-error" : ""} />
      {meta.touched && meta.error && <CustomError touched={meta.touched} error={meta.error}/>}
    </>
  );
};

export default CustomInput;
