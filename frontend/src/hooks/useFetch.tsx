import { useState } from "react";


export default function useFatch(url: string) {
  const [data, setData] = useState();
  const [error, setError] = useState<string | null>(null);

  const getFetch = async () => {
    try {
      const res = await fetch(url, {
        credentials: "include",
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`error from user  ${errorData.error.message}`);
      }
      const userdata = await res.json();
      setData(userdata);
    } catch (error) {
      setError((error as Error).message || "the error not found");
    }
  };

  const postFetch = async (body: object) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // חשוב בשביל קבלת הקוקיז
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        setError(response.statusText)
      }
      const data = await response.json();
      if (data) {
        setData(data);
      }
    } catch (error) {
      setError("cannot Add player" + error)
    }
  };

  const deleteFetch = async (id: string) => {
    try {
      const response = await fetch(`${url}${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // חשוב בשביל קבלת הקוקיז
      });
      if (!response.ok) {
        return false;
      }
      const data = await response.json();
      if (data.foundUser) {
        setData(data.foundUser);
        return true;
      }
      return false;
    } catch (error) {
      console.error("cant to do it", error);
      return false;
    }
  };

  const editFetch = async (id: string, body: object) => {
    try {
      const response = await fetch(`${url}${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // חשוב בשביל קבלת הקוקיז
        body: JSON.stringify(body)
      });
      if (!response.ok) {
        return false;
      }
      const data = await response.json();      
      if (data) {
        setData(data);
      }
    } catch (error) {
      console.error("cant to do it", error);
    }
  };
  return { getFetch, data, error, postFetch, deleteFetch, editFetch};
}
