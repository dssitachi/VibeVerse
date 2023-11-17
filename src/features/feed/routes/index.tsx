import { Navigate, Route, Routes } from "react-router-dom";
import { Feed } from "./Feed";

export default function FeedRoutes() {
    return (
        <Routes>
            <Route path="" element={<Feed />} />
            {/* <Route path=":discussionId" element={<Discussion />} /> */}
            <Route path="*" element={<Navigate to="." />} />
        </Routes>
    );
}
