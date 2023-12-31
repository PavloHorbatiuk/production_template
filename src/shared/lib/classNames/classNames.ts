type Mods = Record<string, boolean | string | undefined>;
export function classNames(
    cls: string,
    mods?: Mods,
    additional?: string[] | undefined
): string {
    return [
        cls,
        ...(additional != null ? additional.filter(Boolean) : []),
        ...(mods != null
            ? Object.entries(mods)
                  .filter(([cls, value]) => Boolean(value))
                  .map(([cls]) => cls)
            : []),
    ].join(" ");
}
