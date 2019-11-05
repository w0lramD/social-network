import React from "react";
import View from "./_view";
import AvatarProfile from "../readers/avatarprofile";
import BioEditor from "../editors/bioeditor";

function ProfileView() {
    return (
        <div style={styles.profileContainer}>
            <AvatarProfile />
            <BioEditor />
        </div>
    );
}

export default function Profile() {
    return <View component={ProfileView} />;
}

const styles = {
    profileContainer: {
        display: "flex",
        justifyContents: "center",
        alignItems: "center",
        margin: "100px"
    }
};
