import ToasterComponent from "@/app/components/Shared/Atoms/ToasterComponent/ToasterComponent";
import PageTitle from "../../components/Shared/Atoms/PageTitle/PageTitle";
import CreateAuthorForm from "./CreateAuthor";


export default function CreateAuthor() {

    return (
        <>
            <PageTitle title="Say About You" />
            <CreateAuthorForm />
        </>
    )
}