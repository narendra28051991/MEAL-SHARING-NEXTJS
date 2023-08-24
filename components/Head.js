import Head from "next/head";

export default function Title(props) {
    return (
        <Head>
            <title>{`Meal Sharing | ${ props.title }`}</title>
            <meta name='recipes' content='meals'></meta>
        </Head>
     )
}