import { ProfileData } from "../types/profile.data.type";

async function ProfileLoader() {
    const res: Response = await fetch("http://localhost:5013/api/Account/profile");
    if(res.status !== 200) {
        throw new Response(res.statusText, {status: res.status, statusText: res.statusText});
    }

    const profileData: ProfileData = await res.json();
    return profileData;
}

export default ProfileLoader;