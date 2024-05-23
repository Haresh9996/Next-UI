import { Image } from "@nextui-org/react";

export default function Images() {
    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Images </h2>
            <div className="flex flex-wrap gap-4">
                <div>
                    <h4>default</h4>
                    <Image width={300} height={300} alt="dummy image" src="https://images.unsplash.com/photo-1610926950541-fb98c47896d4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
                <div>
                    <h4>blurred</h4>
                    <Image isBlurred width={300} height={300} alt="dummy image" src="https://images.unsplash.com/photo-1610926950541-fb98c47896d4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

                </div>
                <div>
                    <h4>Zoomed</h4>
                    <Image isZoomed width={300} height={300} alt="dummy image" src="https://images.unsplash.com/photo-1610926950541-fb98c47896d4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

                </div>
                <div>
                    <h4>Animated skeleton</h4>
                    <Image width={300} height={200} alt="NextUI hero Image with delay" src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" />
                </div>
                <div>
                    <h4> Fallback</h4>
                    <Image fallbackSrc="https://via.placeholder.com/300x200" width={300} height={200} alt="NextUI hero Image with delay" src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" />
                </div>
            </div>
        </>
    )
};
