import { useForm } from "react-hook-form";

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function handleForm(data) {
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleForm)}>
        <label htmlFor="first-name">First Name:</label>
        <input
          type="text"
          {...register("first-name", { required: "First Name is required" })}
        />
        {errors["first-name"] && (
          <p id="error">{errors["first-name"].message}</p>
        )}
        <br />
        <label htmlFor="middle-name">Middle Name:</label>
        <input type="text" {...register("middle-name")} />
        <br />
        <label htmlFor="last-name">Last Name:</label>
        <input
          type="text"
          {...register("last-name", { required: "Last Name is required" })}
        />
        {errors["last-name"] && <p id="error">{errors["last-name"].message}</p>}
        <br />
        <label htmlFor="gender">Gender:</label>
        <select {...register("gender", { required: "Gender is required" })}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Prefer Not to Say</option>
        </select>
        {errors.gender && <p id="error">{errors.gender.message}</p>}
        <br />
        <label>Are you vaccinated?</label>
        <br />
        <input
          type="radio"
          {...register("vaccination", {
            required: "Vaccination status is required",
          })}
          value="yes"
        />
        Yes
        <input
          type="radio"
          {...register("vaccination", {
            required: "Vaccination status is required",
          })}
          value="no"
        />
        No
        {errors.vaccination && <p id="error">{errors.vaccination.message}</p>}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
