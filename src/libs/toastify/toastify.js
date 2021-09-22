const defaultOptions = {
    closeButton: true,
    timeout: 3000,
    showDuration: 500,
    hideDuration: 300,
};

export default function (options = {}) {
    let $root = null;
    const globalOptions = Object.assign({}, defaultOptions, options);

    const createRoot = () => {
        const $root = document.createElement('div');
        $root.className = 'toasts';

        return $root;
    }

    const show = (message, options = {}) => {
        options = Object.assign({}, globalOptions, options);

        const toast = createToast(message, options, () => {
            if ($root && !$root.children.length) {
                $root.remove();
                $root = null;
            }
        });

        if (!$root) {
            $root = createRoot();
            document.body.appendChild($root);
        }

        $root.appendChild(toast.$el);
        animate({
            duration: options.showDuration,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                toast.$el.style.opacity = progress + '';
                toast.$el.style.bottom = (progress * 100 - 100) + 'px';
            }
        });
    }

    const success = (message) => {
        show(message, {type: 'success'});
    }

    const warning = (message) => {
        show(message, {type: 'warning'});
    }

    const error = (message) => {
        show(message, {type: 'error'});
    }

    return {
        show,
        success,
        warning,
        error,
    }
}

function createToast(message, options = {}, dismissHandler) {
    const $el = document.createElement('div');
    const {closeButton, timeout, type} = options;

    $el.className = 'toast' + (type ? ` toast-${type}` : '');
    $el.innerHTML = message;

    const dismiss = () => {

        animate({
            duration: options.hideDuration,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                $el.style.opacity = 1 - progress + '';
                $el.style.right = -(progress * 100) + 'px';
            }
        });

        setTimeout(() => {
            $el.remove();
            dismissHandler();
        }, options.hideDuration)
    }

    if (closeButton) {
        const $button = document.createElement('button');
        $button.className = 'toast-close-button';
        $button.type = 'button';
        $button.innerHTML = "&times;";
        $button.addEventListener('click', dismiss);

        $el.appendChild($button);
    }

    if (timeout) {
        setTimeout(dismiss, timeout);
    }

    return {
        $el,
    }
}

function animate({timing, draw, duration}) {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) {
            timeFraction = 1;
        }
        let progress = timing(timeFraction);
        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}