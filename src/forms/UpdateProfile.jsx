import { useState } from "react";
import ProfileList from "../component/ProfileList";
import ProfileForm from "../component/ProfileForm";

const UpdateProfile = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <div>
      <ProfileList onSelectProfile={setSelectedProfile} />
      {selectedProfile && (
        <ProfileForm
          selectedProfile={selectedProfile}
          onUpdate={(updatedProfile) => {
            alert("Profile updated successfully!");
            setSelectedProfile(null); // Hide the form after update
          }}
        />
      )}
    </div>
  );
};

export default UpdateProfile;
