import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { useState } from "react";
import { Button } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames(cls.navbar, {}, [className ?? ""])}>
            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={() => {
                        setIsOpen(true);
                    }}
                >
                    Login
                </Button>
                <Modal
                    isOpen={isOpen}
                    onClose={() => {
                        setIsOpen(false);
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit enim sint temporibus quod illum praesentium ducimus
                    voluptas deserunt ea repellat neque quisquam accusantium
                    laborum voluptates facere, nulla aliquid cupiditate.
                </Modal>
            </div>
        </div>
    );
};
