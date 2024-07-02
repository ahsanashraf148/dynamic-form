import { useField } from "formik";
import CustomError from "./Error";

const CustomCheckbox = ({ label, ...props }) => {

  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox">
        <input {...field} {...props} className={meta.touched && meta.error ? "input-error" : ""} />
        <span>{label}</span>
      </div>

      {meta.touched && meta.error && <CustomError touched={meta.touched} error={meta.error}/>}
    </>
  );
};

export default CustomCheckbox;
