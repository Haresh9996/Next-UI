import { Link, User } from "@nextui-org/react";

export default function Users() {
    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">User </h2>
            <div className="flex flex-wrap gap-4">
                <div>
                    <User name="Jane Doe" description="Product Designer"
                        avatarProps={{
                            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                        }}
                    />
                </div>
                <div>
                <h4>With Link</h4>
                    <User name="Junior Garcia" description={(
                            <Link href="#" size="sm" isExternal>
                                @jrgarciadev
                            </Link>
                        )}
                        avatarProps={{
                            src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                        }}
                    />
                </div>
            </div>
        </>
    )
};
