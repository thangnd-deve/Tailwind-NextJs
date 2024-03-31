export default function Home() {
    return (
        <>
            <header className={"w-full bg-[--primary-color]"}>
                <div className={"wrap-container"}>
                    <div className={"w-[110px] bg-blue-700 text-red"}>Logo</div>
                    <div className={"w-[calc(100%-60px)] flex justify-between"}>
                        <div className={""}>Nav</div>
                        <div className={""}>Login</div>
                    </div>
                </div>
            </header>
        </>
    )

}
