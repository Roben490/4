import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editDriver } from "../../../../services/dataService";
import { TiArrowBack } from "react-icons/ti";
import { MdSaveAs } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { userRole } from "../../../../enums/userRole";

export default function EditDriver() {
  const [name, setName] = useState("");
  const [role, setRole] = useState<userRole>(userRole.Driver);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  // const { setUser } = useContext(userContext) ?? {
  //     setUser: (): void => {}
  // }
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (id) {
        const response = await editDriver({
          _id: id,
          name: name,
          email: email,
          role: role,
        });
        if (response) {
          toast.success("Update Driver Successfully", {
            position: "bottom-center",
          });
          <ToastContainer autoClose={2000} />;
          navigate("/");
        } else {
          //לזכור שצריך כאן לעבוד על סניק בר אולי...
          navigate("/register");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="edit-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as userRole)}
        >
          Select Role
          <option value={userRole.Admin}>{userRole.Admin}</option>
          <option value={userRole.Driver}>{userRole.Driver}</option>
        </select>

        <input
          type="email"
          value={email}
          placeholder="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">
          Save <MdSaveAs color="red" />
        </button>
      </form>
      <button onClick={() => navigate("/")}>
        Back <TiArrowBack color="red" />
      </button>
    </div>
  );
}
