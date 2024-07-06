import { useParams } from "react-router-dom";

export function ProfilePage() {
  const params = useParams();
  return <div>Profile Page {params.profileId}</div>;
}
