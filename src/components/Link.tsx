interface Props {
	url: string;
	variant?: "primary" | "secondary";
	children: React.ReactNode;
	classname?: string;
}

export const Link = ({ url, children, classname }: Props) => {
	const hasHyphen = classname?.includes("-") ?? false;
	const hasQMark = url.slice(1);
	return (
		<a className={classname} href={url} target="_blank" rel="noopener noreferrer">
			{children}
		</a>
	);
};
